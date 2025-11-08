import { DataTable, List, Create } from 'react-admin';
import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const StudentCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="STU_NUM" />
            {/*<NumberInput source="id" />*/}
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
            <DataTable.NumberCol source="STU_NUM" label = "Student Number"/>
            {/*<DataTable.NumberCol source="id" />*/}
            <DataTable.Col source="STU_NAME" label = "Name"/>
            <DataTable.Col source="STU_LNAME" label = " Last Name"/>
            <DataTable.Col source="STU_TELNUM" label ="Phone Number"/>
            <DataTable.Col source="STU_ADDRESS" label = "Address"/>
        </DataTable>
    </List>
);


export const StudentEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="STU_NUM" />
            {/*<NumberInput source="id" />*/}
            <TextInput source="STU_NAME" />
            <TextInput source="STU_LNAME" />
            <TextInput source="STU_TELNUM" />
            <TextInput source="STU_ADDRESS" />
        </SimpleForm>
    </Edit>
);