/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

export const enum types {
  SYNC_ON_SHOW_SETTINGS = '@@sync/SYNC_ON_SHOW_SETTINGS',
  SYNC_ON_HAVE_SYNC_WORDS = '@@sync/SYNC_ON_HAVE_SYNC_WORDS',
  SYNC_ON_HAVE_SEED_FOR_QR_CODE = '@@sync/SYNC_ON_HAVE_SEED_FOR_QR_CODE',
  SYNC_ON_SETUP_NEW_TO_SYNC = '@@sync/SYNC_ON_SETUP_NEW_TO_SYNC',
  SYNC_ON_REQUEST_QR_CODE = '@@sync/SYNC_ON_REQUEST_QR_CODE',
  SYNC_ON_GENERATE_QR_CODE_IMAGE_SOURCE = '@@sync/SYNC_ON_GENERATE_QR_CODE_IMAGE_SOURCE',
  SYNC_ON_REQUEST_SYNC_WORDS = '@@sync/SYNC_ON_REQUEST_SYNC_WORDS',
  SYNC_ON_RESET = '@@sync/SYNC_ON_RESET',
  SYNC_ON_SYNC_THIS_DEVICE = '@@sync/SYNC_ON_SYNC_THIS_DEVICE',
  SYNC_BOOKMARKS = '@@sync/SYNC_BOOKMARKS',
  SYNC_ON_LOG_MESSAGE = '@@sync/SYNC_ON_LOG_MESSAGE'
}