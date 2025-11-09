
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { DataTable, List, Create } from 'react-admin';

import { NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const PublisherShow = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="PUB_ID" />
            <TextField source="id" />
            <TextField source="PUB_NAME" />
            <TextField source="PUB_TELNUM" />
            <TextField source="PUB_ADDRESS" />
        </SimpleShowLayout>
    </Show>
);

export const PublisherCreate = () => (
    <Create>
       <SimpleForm>
            {/*<NumberInput source="PUB_ID" />*/}
            {/*<TextInput source="id" />*/}
            <TextInput source="PUB_NAME" />
            <TextInput source="PUB_TELNUM" />
            <TextInput source="PUB_ADDRESS" />
        </SimpleForm>
    </Create>
)

export const PublisherEdit = () => (
    <Edit>
        <SimpleForm>
            {/*<NumberInput source="PUB_ID" />*/}
            {/*<TextInput source="id" />*/}
            <TextInput source="PUB_NAME" />
            <TextInput source="PUB_TELNUM" />
            <TextInput source="PUB_ADDRESS" />
        </SimpleForm>
    </Edit>
);



export const PublisherList = () => (
    <List>
        <DataTable>
            {/*<DataTable.NumberCol source="PUB_ID" />*/}
            {/*<DataTable.Col source="id" />*/}
            <DataTable.Col source="PUB_NAME" label ="Name"/>
            <DataTable.Col source="PUB_TELNUM" label = "Phone number" />
            <DataTable.Col source="PUB_ADDRESS" label = "Address" />
        </DataTable>
    </List>
);