/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

/* eslint-env browser */
(function() {
  'use strict';
  /* global $ */
  /* global _ */

  /**
   * Get the top repos from data.
   * @param  {JSON} data Data loaded from Github API.
   * @param  {integer} n    Number of top items.
   * @return {Array}      Of top repo JSONs.
   */
  function getTopRepos(data, n) {
    var filtered = _.map(data, _.partialRight(_.pick, [
      'full_name', 'html_url', 'description', 'stargazers_count',
      'watchers_count', 'forks_count', 'updated_at'
    ]));
    var sorted = _.sortByAll(filtered, [
      'stargazers_count', 'watchers_count', 'forks_count', 'updated_at']);
    var best = _.takeRight(sorted, n).reverse();
    return best;
  }

  /**
   * Inject a gh profile card.
   * @param  {JSON}   obj User obj returned from Github API.
   * @param  {Function} cb  Callback
   */
  function injectProfileCard(obj, cb) {
    $.get('ghprofile-card.html', function(temp) {
      var tempStr = $(temp).prop('outerHTML');
      var rep = tempStr
        .replace(/\${html_url}/g, obj.html_url)
        .replace(/\${user}/g, obj.login)
        .replace(/\${avatar_url}/g, obj.avatar_url)
        .replace(/\${public_repos}/g, obj.public_repos)
        .replace(/\${public_gists}/g, obj.public_gists)
        .replace(/\${followers}/g, obj.followers);
      cb(rep);
    });
  }

  /**
   * Inject a gh repo card.
   * @param  {JSON}   obj Repo obj returned from Github API.
   * @param  {Function} cb  Callback
   */
  function injectRepoCard(obj, cb) {
    $.get('repo-card.html', function(temp) {
      var pair = obj.full_name.split('/');
      var user = pair[0];
      var repo = pair[1];
      var tempStr = $(temp).prop('outerHTML');
      var rep = tempStr
        .replace(/\${repo_name}/g, repo)
        .replace(/\${html_url}/g, obj.html_url)
        .replace(/\${repo_description}/g, obj.description)
        .replace(/\${user}/g, user)
        .replace(/\${repo}/g, repo);
      cb(rep);
    });
  }

  /**
   * Inject the #github tab with profile and repo cards.
   */
  function injectGithub() {
    $.get('https://api.github.com/users/kengz', function(data) {
      injectProfileCard(data, function(res) {
        $('#github-cards').append(res);
      });
    });

    $.get('https://api.github.com/users/kengz/repos', function(data) {
      _.each(getTopRepos(data, 11), function(row) {
        injectRepoCard(row, function(res) {
          $('#github-cards').append(res);
        });
      });
    });
  }

  $(document).ready(injectGithub);
})();
