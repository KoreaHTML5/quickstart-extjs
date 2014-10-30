# Quickstart for ExtJS

Ext JS5의 API를 사용 작성된 웹앱입니다. 앱 생성은 Getting Start를 참고하세요. 


## 어플리케이션 설정

/app/app폴더의 app.json파일을 통해 이 앱의 기본설정을 변경하고 확인할 수 있습니다.


| 필드    |      설정값      |  설명 |
|----------|-------------|------|
| name      |  ext5 | 앱의 이름으로 모든 클래스가 이 이름으로 시작한다. |
| classpath|    ${app.dir}/app   |   클래스패스를 설정한다. app 폴더 외에 다른 클래스 라이브러리 등을 추가할 수 있다. |
| framework | Ext|    Sencha Framework 폴더이고 SDK 폴더다. ext 또는 센차터치용 touch로 구분될 수 있다. |
|theme|ext-theme-gray|테마 종류를 설정한다 기본 값은 Neptune으로 설정돼 있다. 예제에서는 ext-theme-gray를 사용하겠다.|
|requires|sencha-charts|추가 패키지에 대한 설정이다. ExtJS 5에서 chart는 기본 패키지에 없으므로 명시해야만 사용할 수 있다.|
|js|app.js|자바스크립트 파일을 설정한다. app.js는 앱이 실행되기 위해 꼭 필요하고 추가적인 자바스크립트를 명시한다.|
|css | bootstrap.css | 앱이 사용할 테마를 로딩하는 css로 그외 다른 css도 명시할 수 있다.|


## 어플리케이션 폴더 구조

이 앱의 폴더 구조는 아래와 같습니다.

    app.js                  # ExtJS클래스 파일이 앱으로 작동되기 위한 인트로 클래스입니다.
    index.html              # 앱을 실행하기 위해 필요한 html파일입니다.
    app/                    # app폴더는 클래스 파일을 모아놓은 폴더입니다.
        Application.js      # app.js와 마찬가지로 앱을 실행시키기 위한 코드가 존재합니다.
        controller/         # 컨트롤러 클래스를 모아놓은 폴더입니다.
        model/              # 모델 클래스를 모아놓은 폴더입니다. 
        store/              # 데이터를 제공할 스토어 클래스를 모아놓은 폴더입니다.
        view/               # 모든 뷰클래스를 모아놓은 폴더입니다.

## 어플리케이션 빌드 for gulp

sencha command 를 사용하여 빌드와 웹서버 구동과 같은 sencha 의 명령을 사용할 수 있으며 gulp 명령에서는 대표적인 몇가지 동작을 정의해서 사용할 수 있도록 구성되어 있습니다.

- `gulp serve`: sencha app build 와 sencha web start 를 수행합니다.
- `gulp build`: sencha app build prouction 과 동일한 작업을 합니다.
- `gulp build:testing`: sencha app build testing 과 동일한 작업을 합니다.
- `gulp build:package`: sencha app build package 과 동일한 작업을 합니다.

# CONTRIBUTE

See [CONTRIBUTE](https://github.com/KoreaHTML5/dev.koreahtml5.kr/blob/master/CONTRIBUTE.md) for more details

# LICENSE

See LICENSE for more details
