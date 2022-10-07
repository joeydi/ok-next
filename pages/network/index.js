import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Paper from "paper";

let speed = 0.125,
    minRadius = 2,
    maxRadius = 4,
    maxLength = 120,
    nodeCount = 60,
    offset = 20,
    nodes = [],
    nodeLayer,
    nodeStyle = {
        fillColor: "#fff",
    },
    edgeStyle = {
        strokeColor: "#fff",
        strokeWidth: 1,
    },
    edges = [],
    edgeLayer;

const Network = function () {
    this.init = function (canvas) {
        nodes = [];
        edges = [];

        Paper.setup(canvas);

        edgeLayer = new Paper.Layer();
        nodeLayer = new Paper.Layer();

        // Create nodes
        for (var i = 0; i < nodeCount; i += 1) {
            setTimeout(this.add_node, 100 * i);
        }

        // Set drawing loop
        Paper.view.onFrame = this.draw;
    };

    this.draw = function () {
        var i;

        edgeLayer.removeChildren();

        for (i = 0; i < edges.length; i += 1) {
            edges[i].update();
        }

        for (i = 0; i < nodes.length; i += 1) {
            nodes[i].wander();
            nodes[i].update();
            nodes[i].checkBounds();
        }
    };

    this.add_node = function (x, y) {
        var node = new Node();
        node.init(x, y);
        nodes.push(node);
    };
};

const Edge = function () {
    this.init = function (node1, node2) {
        this.start = node1;
        this.end = node2;
    };

    this.update = function () {
        var length = distance(this.start.location.x, this.start.location.y, this.end.location.x, this.end.location.y),
            line;

        if (length < maxLength) {
            line = new Paper.Path();
            line.add(this.start.location, this.end.location);
            line.opacity = 1 - length / maxLength;
            line.style = edgeStyle;

            edgeLayer.addChild(line);
        }
    };
};

const Node = function () {
    var maxSpeed = Math.random() * speed + speed,
        maxForce = 0.4,
        wanderTheta = 0,
        lastLocation,
        randomX = random_int(-offset, Paper.view.size.width + offset),
        randomY = random_int(-offset, Paper.view.size.height + offset);

    nodeLayer.activate();

    this.path = new Paper.Path.Circle({ center: [0, 0], radius: random_int(minRadius, maxRadius) });
    this.location = new Paper.Point(randomX, randomY);
    this.velocity = new Paper.Point(Math.random() * 10, Math.random() * 10);
    this.acceleration = new Paper.Point(Math.random() * 20, Math.random() * 20);

    this.init = function (x, y) {
        let edge;

        if (typeof x !== "undefined" && typeof y !== "undefined") {
            this.location = new Paper.Point(x, y);
        }

        this.path.style = nodeStyle;

        // Create edges to every other node
        for (let i = 0; i < nodes.length; i += 1) {
            edge = new Edge();
            edge.init(this, nodes[i]);
            edges.push(edge);
        }
    };

    this.update = function () {
        lastLocation = this.location.clone();

        this.velocity.x += this.acceleration.x;
        this.velocity.y += this.acceleration.y;
        this.velocity.length = Math.min(maxSpeed, this.velocity.length);

        this.location.x += this.velocity.x;
        this.location.y += this.velocity.y;

        this.acceleration.length = 0;

        // Change node path position, without this it won't move
        this.path.position = this.location.clone();
    };

    this.steer = function (target, slowdown) {
        var steer,
            desired = new Paper.Point(target.x - this.location.x, target.y - this.location.y),
            dist = desired.length;

        if (dist > 0) {
            if (slowdown && dist < 100) {
                desired.length = maxSpeed * (dist / 100);
            } else {
                desired.length = maxSpeed;
            }

            steer = new Paper.Point(desired.x - this.velocity.x, desired.y - this.velocity.y);
            steer.length = Math.min(maxForce, steer.length);
        } else {
            steer = new Paper.Point(0, 0);
        }

        return steer;
    };

    this.seek = function (target) {
        var steer = this.steer(target, false);
        this.acceleration.x += steer.x;
        this.acceleration.y += steer.y;
    };

    this.wander = function () {
        var wanderR = 5,
            wanderD = 100,
            change = 0.4,
            circleLocation,
            circleOffset,
            target;

        wanderTheta += Math.random() * (change * 2) - change;

        circleLocation = this.velocity.clone();
        circleLocation = circleLocation.normalize();
        circleLocation.x *= wanderD;
        circleLocation.y *= wanderD;
        circleLocation.x += this.location.x;
        circleLocation.y += this.location.y;

        circleOffset = new Paper.Point(wanderR * Math.cos(wanderTheta), wanderR * Math.sin(wanderTheta));

        target = new Paper.Point(circleLocation.x + circleOffset.x, circleLocation.y + circleOffset.y);

        this.seek(target);
    };

    this.checkBounds = function () {
        if (this.location.x < -offset) {
            this.location.x = Paper.view.size.width + offset;
        }
        if (this.location.x > Paper.view.size.width + offset) {
            this.location.x = -offset;
        }
        if (this.location.y < -offset) {
            this.location.y = Paper.view.size.height + offset;
        }
        if (this.location.y > Paper.view.size.height + offset) {
            this.location.y = -offset;
        }
    };
};

const random_int = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const distance = function (x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

export default function NetworkPage() {
    const router = useRouter();
    const seo = {
        title: "Network",
        description: "Do stuff. Be clenched, curious. Not waiting for inspiration&rsquo;s shove or society&rsquo;s kiss on your forehead. Pay attention. It&rsquo;s all about paying attention. Attention is vitality. It connects you with others. It makes you eager. Stay eager.",
        canonical: `${process.env.BASE_URL}${router.asPath}`,
    };

    const canvasRef = useRef();

    useEffect(() => {
        const network = new Network();
        network.init(canvasRef.current);
    }, []);

    return (
        <div id="network">
            <NextSeo {...seo} />
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <blockquote className="col-lg-10 col-lg-offset-1">
                            <p>Do stuff. Be clenched, curious. Not waiting for inspiration&rsquo;s shove or society&rsquo;s kiss on your forehead. Pay attention. It&rsquo;s all about paying attention. Attention is vitality. It connects you with others. It makes you eager. Stay eager.</p>
                            <em>&mdash; Susan Sontag</em>
                        </blockquote>
                    </div>
                </div>
            </div>
            <canvas ref={canvasRef} data-paper-resize="true"></canvas>
        </div>
    );
}
