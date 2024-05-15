export default function Page({ params }: { params: { userId: string } }) {
    return <div>
        Dynamic route for user {params.userId}
    </div>
}