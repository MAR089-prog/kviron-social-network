const inputField = document.querySelector('textarea');
const supabaseClient = supabase.createClient('https://sbhldxkihrratikvypim.supabase.co/rest/v1/', 'sb_publishable_KL71ZxnAu7iIbENPRmK9Ag_FVfucdLw')


async function sendPost() {
  const text = inputField.value;
  await supabaseClient.from('posts').insert([{ text: text }]);
}
