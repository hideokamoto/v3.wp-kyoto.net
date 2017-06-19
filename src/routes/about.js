import React, { Component } from 'react';

import {Head} from '../components/head/index'
import {renderered} from '../prerender'
class RouteAbout extends Component {
  render() {
    return (
      <div>
        <Head subTitle="このサイトについて" />
        <h3>このサイトについて</h3>
        <p>WordPressのことやAWSとかを覚え書き的に書いてるブログです。</p>
        <p>たまにイベント登壇とかもしてるので、そのフォローアップを書いたりもしてます。</p>
      </div>
    )
  }
}
export default RouteAbout;
