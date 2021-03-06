import { ActionTree, GetterTree, MutationTree, Module } from 'vuex'

import { TemplateState } from '../types/template'
import { RootState, RootStateWithModules } from '../types/root'

import announcementDOMString from '@/../template/announcement.mod'
import submitInfoDOMString from '@/../template/submitInfo.mod'
import openSubmitDOMString from '@/../template/openSubmit.mod'
import loudlyDOMString from '@/../template/loudly.mod'

const namespaced = true

const state: TemplateState = {
  announcement: announcementDOMString,
  submitInfo: submitInfoDOMString,
  openSubmit: openSubmitDOMString,
  loudly: loudlyDOMString
}

const getters: GetterTree<TemplateState, RootState> = {
  announcement: (state, getters, rootState): string => state.announcement((rootState as RootStateWithModules).app.language as 'en' | 'zh-TW'),
  submitInfo: (state): TemplateState['submitInfo'] => state.submitInfo,
  openSubmit: (state): TemplateState['openSubmit'] => state.openSubmit,
  loudly: (state): TemplateState['loudly'] => state.loudly
}

const actions: ActionTree<TemplateState, RootState> = {
}

const mutations: MutationTree<TemplateState> = {
}

export const template: Module<TemplateState, RootState> = {
  namespaced,
  state,
  actions,
  getters,
  mutations
}
