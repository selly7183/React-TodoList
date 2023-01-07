# TodoList
### Site : https://loquacious-blancmange-7bbc15.netlify.app/
![todolist](https://user-images.githubusercontent.com/88068412/210564341-b63b1c49-e5e3-484c-ab12-4e9d71a232d9.png)

1. Form 태그를 사용.
2. useContext를 사용해서 dark Mode 구현.
3. staus를 active와 completed로 구분해서 해당 status가 checked가 되면 completed으로 이동되게 만듬.
4. localStorage 로 새로고침해도 데이터 유지되게 만듬. (useEffect을 사용해서 todos가 변화할때마다 해당 기능 실행되게 해줌)
5.  // localStorage에 저장할때
   useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]); //배열을 저장하기 위해서는 JSON으로 변환해줘야함.
  
  // localStorage에 저장한걸 보여줄때
  function readTodosFromLocalStorage() {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  }
  
6. id값을 filter를 이용해 삭제기능 구현.
