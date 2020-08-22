import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton,
} from "../components/forms";
import Screen from "../components/screen";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
});

const categories = [
    { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
    { label: "Clothing", value: 2, backgroundColor: "tomato", icon: "apps" },
    { label: "Camera", value: 3, backgroundColor: "blue", icon: "lock" },
];

function ListingEditScreen() {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="title"
                    maxLength={255}
                    placeholder="Title"
                />
                <AppFormField
                    name="price"
                    keyboardType="numeric"
                    maxLength={8}
                    placeholder="Price"
                    width={120}
                />

                <AppFormPicker
                    items={categories}
                    name="category"
                    placeholder="Category"
                    width="50%"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                />

                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    placeholder="Description"
                    numberOfLines={3}
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default ListingEditScreen;
