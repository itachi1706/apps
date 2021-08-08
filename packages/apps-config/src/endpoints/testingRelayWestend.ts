// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { EndpointOption } from './types';

import { WESTEND_GENESIS } from '../api/constants';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   value: The actual hosted secure websocket endpoint

// Based on history, this will expand so keep it as a singular chunk
export function createWestend (t: TFunction): EndpointOption {
  return {
    dnslink: 'westend',
    genesisHash: WESTEND_GENESIS,
    info: 'westend',
    text: t('rpc.westend', 'Westend', { ns: 'apps-config' }),
    providers: {
      Pinknode: 'wss://rpc.pinknode.io/westend/explorer'
    },
    teleport: [1000],
    linked: []
  };
}
