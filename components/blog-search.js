import { useRef } from "react";
import { useRouter } from "next/router";

import Search from "@/icons/search.svg";

export default function BlogSearch() {
    const router = useRouter();
    const searchInputRef = useRef();

    const submitSearchQuery = function (e) {
        e.preventDefault();

        const query = searchInputRef.current.value;
        if (query) {
            router.push(`/blog/search/${query}`);
        }
    };

    return (
        <form className="form-inline" role="form" method="get" action="/" onSubmit={submitSearchQuery}>
            <div className="input-group">
                <input ref={searchInputRef} type="search" className="form-control" id="s" name="s" placeholder="Search..." />
                <button className="btn btn-default" type="submit">
                    <span className="visually-hidden">Search</span>
                    <Search class="icon" />
                </button>
            </div>
        </form>
    );
}
