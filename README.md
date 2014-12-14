mcard
=====

[강환기 김진숙의 모바일 청첩장](http://kangki.github.io/mcard)

- 모바일 청첩장
- 웨딩촬영 앨범
- 감사글 남기기

## github pages로 publising

1. Setting 메뉴에서 github pages를 생성
2. gh-pages를 Default branch로 설정

## bootstrap으로 layout 처리하기

bootstrap의 반응형 class를 사용하여 쉽게 모바일에서도 잘 보여지는 이미지 처리를 할 수 있다.
	
	<img class='img-responsive' src='' />

## firebase로 댓글 게시판 만들기

	// firebase 객체생성
	var fb = new Firebase('https://kangki.firebaseio.com/');
	
	// 전송 : 정보 입력
	fb.push({ name: name, message: message });

	// 이벤트 : 정보 입력
	fb.on(‘child_added’, function(s){
		var data = s.val();
		console.log(data.name + ‘,’ + data.message);
	});
