const expect = require('chai').expect;

const checkPage = require('../../../packages/matman/test/data/hi-demo/demo_04/src/page_baidu_index/cases/basic-check');

describe('使用本地项目和mockstar: success_type_1', function () {
    this.timeout(30000);

    let resultData;

    before(function () {
        return checkPage({
            show: false,
            doNotCloseBrowser: false,
            useRecorder: false,
            queryDataMap: {
                'demo_cgi': 'success_type_1'
            }
        })
            .then(function (result) {
                // console.log(JSON.stringify(result));
                resultData = result;
            });
    });

    describe('检查基本信息', function () {
        let data;

        before(function () {
            data = resultData.data;
        });

        it('网站title应该为：hi jack', function () {
            expect(data.title).to.equal('hi jack');
        });

        it('打招呼的文字应该为：你好，我不是 www.baidu.com', function () {
            expect(data.sayHello).to.equal('你好，我不是 www.baidu.com');
        });

        it('消息文字应该为：我是学生', function () {
            expect(data.msgText).to.equal('我是学生');
        });

        it('加载完成提示文字应该为：loaded!', function () {
            expect(data.loadedText).to.equal('loaded!');
        });
    });
});