import { DataTable, DateField, List, Create } from 'react-admin';
import { DateInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const OrderCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="ORD_NUM"  />
            {/*<TextInput source="id" />*/}
            <DateInput source="ORD_DATE" />
            <NumberInput source="ORD_QUANTITY" />
            <NumberInput source="BOOK_ISBN" />
        </SimpleForm>
    </Create>
)
export const OrderList = () => (
    <List>
        <DataTable>
            <DataTable.NumberCol source="ORD_NUM" label = "Order Number"/>
            {/*<DataTable.Col source="id" />*/}
            <DataTable.Col source="ORD_DATE" label = "Date">
                <DateField source="ORD_DATE" />
            </DataTable.Col>
            <DataTable.NumberCol source="ORD_QUANTITY" label ="Quantity" />
            <DataTable.NumberCol source="BOOK_ISBN" label = "Book ISBN" />
        </DataTable>
    </List>
);


export const OrderEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="ORD_NUM" />
            {/*<TextInput source="id" />*/}
            <DateInput source="ORD_DATE" />
            <NumberInput source="ORD_QUANTITY" />
            <NumberInput source="BOOK_ISBN" />
        </SimpleForm>
    </Edit>
);