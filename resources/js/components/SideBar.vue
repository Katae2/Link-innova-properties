<template>
    <v-navigation-drawer color="grey-darken-2" permanent>
        <v-list>
            <v-list-item prepend-avatar="https://static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg" title="Kong Saevang"
                subtitle="kong@google.com">
                <template v-slot:append>
                    <v-btn size="small" variant="text" icon="mdi-menu-down"></v-btn>
                </template>
            </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list :lines="false" density="compact" nav>
            <v-list-item v-for="(item, i) in items" :key="i" :value="item" active-background="#FFF">
                <template v-slot:prepend>
                    <v-icon :icon="item.icon"></v-icon>
                </template>
                <v-list-item-title style="font-size: 14px;">{{ item.text }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        data: () => ({
            selectedItem: 0,
            items: [{
                    text: 'My Files',
                    icon: 'mdi-home'
                },
                {
                    text: 'Employee',
                    icon: 'mdi-account-multiple'
                },
                {
                    text: 'product',
                    icon: 'mdi-dropbox'
                },
                {
                    text: 'Recent',
                    icon: 'mdi-history'
                },
                {
                    text: 'Offline',
                    icon: 'mdi-check-circle'
                },
                {
                    text: 'Uploads',
                    icon: 'mdi-upload'
                },
                {
                    text: 'Backups',
                    icon: 'mdi-cloud-upload'
                },
            ],
        }),
    }
</script>

<style>

</style>