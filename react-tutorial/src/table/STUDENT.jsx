import { DataTable, List, Create } from 'react-admin';
import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const StudentCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="STU_NUM" />
            <NumberInput source="id" />
            <TextInput source="STU_NAME" />
            <TextInput source="STU_LNAME" />
            <TextInput source="STU_TELNUM" />
            <TextInput source="STU_ADDRESS" />
        </SimpleForm>
    </Create>
)

export const StudentList = () => (
    <List>
        <DataTable>
            <DataTable.NumberCol source="STU_NUM" />
            <DataTable.NumberCol source="id" />
            <DataTable.Col source="STU_NAME" />
            <DataTable.Col source="STU_LNAME" />
            <DataTable.Col source="STU_TELNUM" />
            <DataTable.Col source="STU_ADDRESS" />
        </DataTable>
    </List>
);


export const StudentEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="STU_NUM" />
            <NumberInput source="id" />
            <TextInput source="STU_NAME" />
            <TextInput source="STU_LNAME" />
            <TextInput source="STU_TELNUM" />
            <TextInput source="STU_ADDRESS" />
        </SimpleForm>
    </Edit>
);