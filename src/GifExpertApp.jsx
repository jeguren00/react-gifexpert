import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
    const onAddCategory = (value) => {
        if (categories.includes(value)) return;
        const newCategories = [value,...categories];
        setCategories(newCategories);
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddCategory={onAddCategory}/>
            <ol>
                { categories.map( category => {
                    return <GifGrid key={category} category={category}/>
                })}
            </ol>
        </>
    );
}