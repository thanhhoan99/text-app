import React from "react";
import Add from "./Add";
import List from "./List";

export default function Products () {
    const [reload , setReload] = React.useState(0);

    return (
        <div>
            <Add onAddSuccess={() => setReload((prev) => prev + 1)} />
            <List reload={reload} />
        </div>
    );
}
