<template>
    <div>
        <h3 class="text-center mt-8">Create Owner</h3>
        <div class="row mt-12">
            <div class="col-md-6">
                <form @submit.prevent="addOwner">
                    <div class="md:grid md:grid-cols-3 md:gap-6">
                        <div class="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div class="grid grid-cols-8 gap-6">
                                    <div class="col-span-4 sm:col-span-3">
                                        <label
                                            for="first-name"
                                            class="block text-sm font-medium text-gray-700"
                                            >First Name</label
                                        >
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autocomplete="given-name"
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            v-model="owner.first_name"
                                        />
                                    </div>

                                    <div class="col-span-4 sm:col-span-3">
                                        <label
                                            for="last-name"
                                            class="block text-sm font-medium text-gray-700"
                                            >Last Name</label
                                        >
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autocomplete="family-name"
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            v-model="owner.last_name"
                                        />
                                    </div>

                                    <div class="col-span-4 sm:col-span-3">
                                        <label
                                            for="email-address"
                                            class="block text-sm font-medium text-gray-700"
                                            >Email address</label
                                        >
                                        <input
                                            type="text"
                                            name="email-address"
                                            id="email-address"
                                            autocomplete="email"
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            v-model="owner.email"
                                        />
                                    </div>

                                    <div class="col-span-4 sm:col-span-3">
                                        <label
                                            for="phone-number"
                                            class="block text-sm font-medium text-gray-700"
                                            >Phone Number</label
                                        >
                                        <input
                                            type="text"
                                            name="phone-number"
                                            id="email-address"
                                            autocomplete="phone number"
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            v-model="owner.phone_number"
                                        />
                                    </div>
                                </div>

                                <div
                                    v-for="(pet, counter) in pets"
                                    v-bind:key="counter"
                                >
                                    <div class="grid grid-cols-8 gap-6">
                                        <div class="col-span-4 sm:col-span-3">
                                            <span @click="deletePet(counter)"
                                                >x</span
                                            >

                                            <label
                                                for="pets"
                                                class="block text-sm font-medium text-gray-700"
                                                >{{ counter + 1 }}. Name
                                            </label>
                                            <input
                                                type="text"
                                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                v-model="pet.name"
                                            />
                                        </div>

                                        <div class="col-span-4 sm:col-span-3">
                                            <label
                                                for="pets"
                                                class="block text-sm font-medium text-gray-700"
                                                >Species</label
                                            >
                                            <input
                                                type="text"
                                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                v-model="pet.species"
                                            />
                                        </div>

                                        <div class="col-span-4 sm:col-span-3">
                                            <label
                                                for="pets"
                                                class="block text-sm font-medium text-gray-700"
                                                >Color</label
                                            >
                                            <input
                                                type="text"
                                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                v-model="pet.color"
                                            />
                                        </div>

                                        <div class="col-span-4 sm:col-span-3">
                                            <label
                                                for="pets"
                                                class="block text-sm font-medium text-gray-700"
                                                >Birthday</label
                                            >
                                            <input
                                                type="text"
                                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                v-model="pet.birthday"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    @click="addPet"
                                    class="text-blue-500 mt-8"
                                >
                                    + A Pet
                                </button>
                            </form>
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded text-white mt-8"
                    >
                        Create
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            owner: {},
            pets: [],
        };
    },
    methods: {
        addOwner() {
            this.axios
                .post("/api/owners", this.owner)
                .then(() => this.$router.push({ name: "owners:list" }))
                .catch((err) => console.log(err))
                .finally(() => (this.loading = false));
        },
        addPet() {
            this.pets.push({
                name: "",
                species: "",
                color: "",
                birthday: "",
            });
        },
        deletePet(counter) {
            this.pets.splice(counter, 1);
        },
    },
};
</script>
