export const CreateTask = () => {
  return (
    <div className="items-center justify-center flex m-5">
      <form action="">
        <input
          type="text"
          required
          name="title"
          className="ring-1 ring-black w-96 mr-2 rounded-sm py-1"
          placeholder="今日やることを入力"
        />
        <button className="bg-blue-500 text-white hover:bg-blue-600 rounded-md py-1 px-3 p-2">
          追加
        </button>
      </form>
    </div>
  );
}