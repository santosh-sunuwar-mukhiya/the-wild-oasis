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