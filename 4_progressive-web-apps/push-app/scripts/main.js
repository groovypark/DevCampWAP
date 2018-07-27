/*
*
*  Push Notifications codelab
*  Copyright 2015 Google Inc. All rights reserved.
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      https://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License
*
*/

/* eslint-env browser, es6 */

'use strict';

// var applicationServerPublicKey = '<Your Public Key>';

var pushButton = document.querySelector('.js-push-btn');
var isSubscribed = false;
var swRegistration = null;

// UI 초기화 함수 - initialiseUI()
function initialiseUI() {
  pushButton.addEventListener('click', function () {
    pushButton.disabled = true;
    if (isSubscribed) {
      unSubscribeUser();
    } else {
      subscribeUser();
    }
  });
  
  swRegistration.pushManager.getSubscription()
    .then(function (subscription) {
      isSubscribed = !(subscription === null);

      if (isSubscribed) {
        console.log('User IS subscribed.');
      } else {
        console.log('User is NOT subscribed.');
      }

      updateBtn();
    });
}

// 버튼 활성 관련 함수 - updateBtn()
function updateBtn() {
  if (Notification.permission === 'denied') {
    pushButton.textContent = 'Push Messaging Blocked.';
    pushButton.disabled = true;
    updateSubscriptionOnServer(null);
    return;
  }

  
  if (isSubscribed) {
    pushButton.textContent = 'Disable Push Messaging';
  } else {
    pushButton.textContent = 'Enable Push Messaging';
  }

  pushButton.disabled = false;
}

// 해당 기기(브라우저)에 푸시를 등록하는 함수
function subscribeUser() {
  swRegistration.pushManager.subscribe({
    // 푸시 수신 시 알람 표시 속성
    userVisibleOnly: true
  })
    .then(function (subscription) {
      console.log('User is subscribed:', subscription);
      isSubscribed = true;

      updateSubscriptionOnServer(subscription);
      updateBtn();
    })
    .catch(function (err) {
      console.log('Failed to subscribe the user: ', err);
      updateBtn();
    });
}

function updateSubscriptionOnServer(subscription, unsubscribed) {
  var subscriptionJson = document.querySelector('.js-subscription-json');
  var subscriptionDetails = document.querySelector('.js-subscription-details');

  if (subscription) {
    subscriptionJson.textContent = JSON.stringify(subscription);
    subscriptionDetails.classList.remove('is-invisible');
    sendDeviceKeytoFirebase(subscription.endpoint.split('send/')[1]);
  } else {
    subscriptionDetails.classList.add('is-invisible');
  }
}

// 서비스 워커 지원 여부 확인 후 등록
if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported');

  navigator.serviceWorker.register('sw.js')
    .then(function (swReg) {
      console.log('Service Worker is registered', swReg);

      swRegistration = swReg;
      initialiseUI();
    })
    .catch(function (error) {
      console.error('Service Worker Error', error);
    });
} else {
  console.warn('Push messaging is not supported');
  pushButton.textContent = 'Push Not Supported';
}

function unSubscribeUser() {
  swRegistration.pushManager.getSubscription().then(function (subscription) {
    subscription.unsubscribe().then(function (successful) {
      console.log('User is unsubscribed : ', successful);
      console.log('Unsubscribed subscription : ', subscription);

      updateSubscriptionOnServer(subscription, successful);
      isSubscribed = false;

      updateBtn();
    }).catch(function (e) {
      console.log('Failed to unsubscribe the user: ', e);
      updateBtn();
    })
  });
}



// -------------------------------
// 순서
// 1. 웹 앱 매니페스트 파일 생성
// 2. 서비스워커 등록
//   - UI 초기화 함수 - initialiseUI()
//   - 버튼 활성 관련 함수 - updateBtn()
//   - 해당 기기에 푸시 구독
//   - 파이어 베이스에 키 저장
//   - 서비스 워커에 Push Notification 관련 구현
//   - 파이어 베이스에 저장된 키로 구글 푸시 서버에 POST 요청을 보냄 
//   - 요청의 내용을 구현한 Notification에 맞게 표시 
// 3. 서비스워커 설치 (캐싱)
// 4. 푸시 알람 기능 구현
// -------------------------------

// function urlB64ToUint8Array(base64String) {
//   const padding = '='.repeat((4 - base64String.length % 4) % 4);
//   const base64 = (base64String + padding)
//     .replace(/\-/g, '+')
//     .replace(/_/g, '/');

//   const rawData = window.atob(base64);
//   const outputArray = new Uint8Array(rawData.length);

//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// }
