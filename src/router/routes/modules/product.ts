import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/product',
  name: 'Product',
  component: LAYOUT,
  redirect: '/product/trademark',
  meta: {
    // 权重，体现在谁在前面谁在后面
    orderNo: 10,
    // 图标
    icon: 'grommet-icons:shop',
    // 名称中英文切换
    title: t('routes.product.product'),
  },
  children: [
    {
      // 在路由中不加斜杠，则为相对路径，路径会加入父亲的路径，加入了斜杆/则为绝对位置，则路劲不会加父亲
      path: 'trademark',
      name: 'trademark',
      component: () => import('/@/views/product/trademark/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.product.trademark'),
      },
    },
    {
      // 在路由中不加斜杠，则为相对路径，路径会加入父亲的路径，加入了斜杆/则为绝对位置，则路劲不会加父亲
      path: 'spu',
      name: 'spu',
      component: () => import('/@/views/product/spu/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.product.spu'),
      },
    },
    {
      // 在路由中不加斜杠，则为相对路径，路径会加入父亲的路径，加入了斜杆/则为绝对位置，则路劲不会加父亲
      path: 'sku',
      name: 'sku',
      component: () => import('/@/views/product/sku/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.product.sku'),
      },
    },
    {
      // 在路由中不加斜杠，则为相对路径，路径会加入父亲的路径，加入了斜杆/则为绝对位置，则路劲不会加父亲
      path: 'attr',
      name: 'attr',
      component: () => import('/@/views/product/attr/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.product.attr'),
      },
    },
  ],
};

export default dashboard;
