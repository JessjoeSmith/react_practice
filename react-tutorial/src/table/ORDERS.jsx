import { DataTable, DateField, List, Create } from 'react-admin';
import { DateInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const OrderCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="ORD_NUM" />
            <TextInput source="id" />
            <DateInput source="ORD_DATE" />
            <NumberInput source="ORD_QUANTITY" />
            <NumberInput source="BOOK_ISBN" />
        </SimpleForm>
    </Create>
)
export const OrderList = () => (
    <List>
        <DataTable>
            <DataTable.NumberCol source="ORD_NUM" />
            <DataTable.Col source="id" />
            <DataTable.Col source="ORD_DATE">
                <DateField source="ORD_DATE" />
            </DataTable.Col>
            <DataTable.NumberCol source="ORD_QUANTITY" />
            <DataTable.NumberCol source="BOOK_ISBN" />
        </DataTable>
    </List>
);


export const OrderEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="ORD_NUM" />
            <TextInput source="id" />
            <DateInput source="ORD_DATE" />
            <NumberInput source="ORD_QUANTITY" />
            <NumberInput source="BOOK_ISBN" />
        </SimpleForm>
    </Edit>
);