import CategoryCard from "./CategoryCard";

import {
    ShieldPlus,
    Pill,
    Sparkles,
    Apple,
    Venus,
    Scale,
    Bone,
    Eye,
    Gift,
} from "lucide-react";

const categories = [
    {
        icon: ShieldPlus,
        title: "COVID-19",
        count: 14,
    },
    {
        icon: Pill,
        title: "Allergy",
        count: 24,
    },
    {
        icon: Sparkles,
        title: "Therapeutic Skincare",
        count: 124,
    },
    {
        icon: Apple,
        title: "Digestive Health",
        count: 2,
    },
    {
        icon: Venus,
        title: "Women's Health",
        count: 14,
    },
    {
        icon: Scale,
        title: "Weight Management",
        count: 51,
    },
    {
        icon: Bone,
        title: "Joint Care",
        count: 123,
    },
    {
        icon: Eye,
        title: "Vision Care",
        count: 11,
    },
    {
        icon: Gift,
        title: "Gift Cards",
        count: 7,
    },
];

const CategorySlider = () => {
    return (
        <div className="mt-10 flex gap-4 overflow-x-auto scrollbar-hide pb-2">

            {categories.map((category, index) => (
                <CategoryCard
                    key={index}
                    {...category}
                />
            ))}

        </div>
    );
};

export default CategorySlider;