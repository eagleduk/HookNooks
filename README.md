Hook

Hook는 function 타입의 Component 에서
state를 사용하기 위한 내장 라이브러리??

1. useState

- 리턴 타입은 길이가 2인 Array.
- 첫번째 인자값은 value,
- 두번째 인자값은 첫번째 인자값을 변경시키는 함수라고 할까 방법이라고 할까...
- 파라미터는 첫번째 인자값의 초기값을 준다.
- useState는 여러번을 사용하여 각각 변수를 받을수 있다
- 두번쨰 인자값.. 함수를 실행하지 않으면 내부적으로는 값이 변경이 되지만, return시에는 값이 변경되지 않음. 따라서 Hook을 별도의 함수로 만들 때, 함수 안에서는 값이 변경되어 실행 되지만, 값을 return할때는 값이 변경이 되질 않는다.

2. useEffect

- render 이후 실행..
- componentDidmount, componentWillUnmount, componentDidUpdate 의 기능을 전부 가지고 있음.
- 첫번째 인자는 useEffect가 실행될때의 작업을 수행할 수 있다 마치 componentDidUpdate의 기능과 비슷.
- 두번째 인자는 useEffect가 실행 되는 조건을 넣을 수 있다. 배열로 state 변수의 값이 변경될 시에 수행하도록 할 수 있다. 하지만 값이 없을때에는 mount시 최초 한번만 동작한다. 마치 componentDidmount 기능과 비슷.
- Event Listener를 등록할 수도 있다. 하지만 Event 같은걸 등록시에는 꼭 return 함수로 event 등을 삭제를 해주어야 리소스를 절약할 수 있다. 마치 componentWillUnmount 시 하는 동작과 비슷하다.

3. useRef

- 모든 html 태그에는 기본 reference 가 저장되어 있다. 그 ref의 value로 설정하면, 해당 reference의 element를 사용할 수 있다.
