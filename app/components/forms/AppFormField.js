import React from 'react';
import { useFormikContext } from 'formik'

import AppTextInput from "../AppTextInput"
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, width, ...otherProps }) {

    const { setFieldTouched, handleChange, errors, touched } = useFormikContext()

    return (
        <>
            <AppTextInput
                width={width}
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormField;