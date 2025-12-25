export default async function Page({
    params
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return (
        <div>
            Blogs {id}
        </div>
    );
}

// Make the following route path
// /practice/users
// - Display "Users Page" text on the page I
// /practice/users/settings
// → Display "User Setting" text on the page
// /practice/users/settings/privacy
// - Display "User Privacy Page" text on the page
// /practice/users/data/ [id]
// → Display "User Data Page: {id}" text on the page
// /practice/users/data/[idl/edit
// → Display "Edit User Data Page: {id}" text on the page
// Make layouts for /practice/users
// to include User Header and User Footer

