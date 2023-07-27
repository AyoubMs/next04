export default async function GetUserPosts(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {next: {revalidate: 60}} )

    if (!res.ok) undefined
    return res.json()
}
