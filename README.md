# modal_test

・ボタン制御で何番目のボタンがクリックされたかを検知して、該当のモーダルウィンドウのコンテンツにアクセスする。
・アロー関数ではthisの挙動が違うため、on click でイベントを引数で取得し、e.currentTarget という形でthisの代わりに利用する。