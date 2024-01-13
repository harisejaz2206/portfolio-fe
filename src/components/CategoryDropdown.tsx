// CategoryDropdown.tsx
import React from "react";
import { IUserCategoryListing } from "../app/features/userportal-category/interfaces/category.interface";

interface CategoryDropdownProps {
    categories: IUserCategoryListing[];
    onSelect: (categoryId: string) => void;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({ categories, onSelect }) => {
    return (
        <select onChange={(e) => onSelect(e.target.value)}>
            <option value="">Select Category</option>
            {categories.map((category) => (
                <option key={category._id} value={category._id}>
                    {category.name}
                </option>
            ))}
        </select>
    );
};

export default CategoryDropdown;
