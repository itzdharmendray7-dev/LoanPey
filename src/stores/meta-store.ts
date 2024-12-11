// metaStore.ts
import { defineStore } from 'pinia';

interface MetaState {
  siteTitle: string;
}

export const useMetaStore = defineStore({
  id: 'meta',
  state: (): MetaState => ({
    siteTitle: 'LoanPey'
  }),
  getters: {
    getSiteTitle(state: MetaState): string {
      return state.siteTitle;
    },
  },
  actions: {
    setSiteTitle(title: string): void {
      this.siteTitle = title;
    }
  },
});
