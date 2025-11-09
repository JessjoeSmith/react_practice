
import { DataTable, DateField, List, Create } from 'react-admin';
import { DateInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

import { NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const BookShow = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="BOOK_ISBN" />
            <TextField source="id" />
            <DateField source="BOOK_DATE" />
            <TextField source="BOOK_NAME" />
            <NumberField source="BOOK_EDITION" />
            <TextField source="BOOK_STATUS" />
            <NumberField source="PUB_ID" />
        </SimpleShowLayout>
    </Show>
);

 export const BookCreate =() => (
    <Create>
        <SimpleForm>
            {/*<NumberInput source="BOOK_ISBN" />*/}
            {/*<TextInput source="id" />*/}
            <DateInput source="BOOK_DATE" />
            <TextInput source="BOOK_NAME" />
            <NumberInput source="BOOK_EDITION" />
            <TextInput source="BOOK_STATUS" />
            <NumberInput source="PUB_ID" />
        </SimpleForm>
    </Create>
)


export const BookList = () => (
    <List>
        <DataTable>
            <DataTable.NumberCol source="BOOK_ISBN" label = "Book ISBN" />
            {/*<DataTable.Col source="id" />*/}
            <DataTable.Col source="BOOK_DATE" label = "Date">
                <DateField source="BOOK_DATE" />
            </DataTable.Col>
            <DataTable.Col source="BOOK_NAME" label = "Name" />
            <DataTable.NumberCol source="BOOK_EDITION" label = "Edition" />
            <DataTable.Col source="BOOK_STATUS" label = "Status" />
            <DataTable.NumberCol source="PUB_ID" label = "Publisher id" />
        </DataTable>
    </List>
);


export const BookEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="BOOK_ISBN" />
            {/*<TextInput source="id" />*/}
            <DateInput source="BOOK_DATE" />
            <TextInput source="BOOK_NAME" />
            <NumberInput source="BOOK_EDITION" />
            <TextInput source="BOOK_STATUS" />
            <NumberInput source="PUB_ID" />
        </SimpleForm>
    </Edit>
);