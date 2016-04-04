
var observer={
    // 发布者
    topics:{},
    subUid:-1,
    publish :function (topic, info) {
        if (!this.topics[topic]) {
            return false;
        }
            this.topics[topic].forEach(function(item){
            	item.func(topic, info);
            });
        return true;
    },
    //订阅者
    subscribe :function (topic, func) {
        if (!this.topics[topic]) {
            this.topics[topic] = [];
        }

        var count = (++this.subUid).toString();
        this.topics[topic].push({
            count: count,
            func: func
        });
        return count;
    },
    //退订
   unsubscribe : function (count) {

        for (var m in this.topics) {
                console.log(this.topics[m])
            if (this.topics[m]) {
                for (var i = 0, j = this.topics[m].length; i < j; i++) {
                    if (this.topics[m][i].count == count) {
                        console.log("sdfsd"+this.topics[m].splice(i, 1));
                        return count;
                    }
                }
            }
        }
        return false;
    },
} 

//订阅example1
observer.subscribe('click', function (topic, info) {
    console.log("您订阅了"+topic + "，发布了新的消息是：" + info);
});
//订阅example2
observer.subscribe('select', function (topic, info) {
    console.log("您订阅了"+topic + "，发布了新的消息是：" + info);
});

//发布通知
observer.publish('click', '您点击了网页中的按钮');
observer.publish('click', ['test', 'a', 'b', 'c']);
observer.publish('click', [{ 'color': 'blue' }, { 'text': 'hello'}]);
observer.publish('select', 'hello world!我选择了你');