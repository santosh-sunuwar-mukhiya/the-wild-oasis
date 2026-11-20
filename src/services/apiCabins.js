import supabase from './supabase.js'

export async function getCabins() {
    const { data, error } = await supabase
        .from('cabins')
        .select('*');

    if (error) {
        console.log(error.message);
        throw new Error('Unable to get cabins');
    }

    return data;
}

export async function deleteCabin(id) {
    const { data, error } = await supabase
        .from('cabins')
        .delete().eq("id", id);

    if (error) {
        console.error(error.message);
        throw new Error('Unable to delete cabins');
    }
    return data;
}