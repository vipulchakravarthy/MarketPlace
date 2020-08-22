import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({ items, name, PickerItemComponent, placeholder, width }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
            <AppPicker
                items={items}
                width={width}
                PickerItemComponent={PickerItemComponent}
                onSelectedItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;
