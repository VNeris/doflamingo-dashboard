export function HomeProfile() {
return (
    <div className="flex my-6 rounded-sm w-full">
        <div className="bg-zinc-50 w-full text-pink-600 border-r">
        <h2 className="text-3xl font-semibold font-mono flex items-center justify-center pb-2 p-5 border-b-2 border-b-pink-500">Profile</h2>
        <div className="items-center flex justify-center mt-10">
            <img src="https://via.placeholder.com/200" className="rounded-full" alt="" />
        </div>
        
        </div>
    </div>
);
}