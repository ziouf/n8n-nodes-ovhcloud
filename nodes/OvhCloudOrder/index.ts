/**
 * @brief Order resource operations for n8n node
 *
 * Provides operations for managing OVHcloud orders including:
 * - Manage order carts (list, create, get, update, delete)
 * - Manage cart items
 * - Checkout and validate carts
 * - Assign carts to accounts
 * - Manage cart coupons
 * - Get cart summaries
 *
 * Available operations:
 * - `listCarts`: ListCarts - List all order carts
 * - `createCart`: CreateCart - Create a new order cart
 * - `getCart`: GetCart - Get cart details
 * - `updateCart`: UpdateCart - Update a cart
 * - `deleteCart`: DeleteCart - Delete a cart
 * - `listCartItems`: ListCartItems - List all items in a cart
 * - `getCartItem`: GetCartItem - Get cart item details
 * - `updateCartItem`: UpdateCartItem - Update a cart item
 * - `deleteCartItem`: DeleteCartItem - Delete a cart item
 * - `getCheckout`: GetCheckout - Get checkout information
 * - `validateCart`: ValidateCart - Validate cart and create order
 * - `assignCart`: AssignCart - Assign cart to account
 * - `listCoupons`: ListCoupons - List cart coupons
 * - `addCoupon`: AddCoupon - Add a coupon to cart
 * - `deleteCoupon`: DeleteCoupon - Delete a coupon from cart
 * - `getCartSummary`: GetCartSummary - Get cart summary
 *
 * @remarks
 * Orders are managed under `/order` route.
 * Cart ID is required for most operations.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { executeListCarts, descriptionListCarts, executeCreateCart, descriptionCreateCart , executeGetCart, descriptionGetCart , executeUpdateCart, descriptionUpdateCart , executeDeleteCart, descriptionDeleteCart  } from './resources/cart';
import { executeListCartItems, descriptionListCartItems, executeGetCartItem, descriptionGetCartItem , executeUpdateCartItem, descriptionUpdateCartItem , executeDeleteCartItem, descriptionDeleteCartItem  } from './resources/cartItem';
import { executeGetCheckout, descriptionGetCheckout, executeValidateCart, descriptionValidateCart  } from './resources/cartCheckout';
import { executeAssignCart, descriptionAssignCart } from './resources/cartAssign';
import { executeListCoupons, descriptionListCoupons, executeAddCoupon, descriptionAddCoupon , executeDeleteCoupon, descriptionDeleteCoupon  } from './resources/cartCoupon';
import { executeGetCartSummary, descriptionGetCartSummary } from './resources/cartSummary';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Order Operation',
			name: 'orderOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Add Coupon',
					value: 'addCoupon',
					action: 'Add a coupon to cart',
				},
				{
					name: 'Assign Cart',
					value: 'assignCart',
					action: 'Assign cart to account',
				},
				{
					name: 'Create Cart',
					value: 'createCart',
					action: 'Create a new order cart',
				},
				{
					name: 'Delete Cart',
					value: 'deleteCart',
					action: 'Delete a cart',
				},
				{
					name: 'Delete Cart Item',
					value: 'deleteCartItem',
					action: 'Delete a cart item',
				},
				{
					name: 'Delete Coupon',
					value: 'deleteCoupon',
					action: 'Delete a coupon from cart',
				},
				{
					name: 'Get Cart',
					value: 'getCart',
					action: 'Get cart details',
				},
				{
					name: 'Get Cart Item',
					value: 'getCartItem',
					action: 'Get cart item details',
				},
				{
					name: 'Get Cart Summary',
					value: 'getCartSummary',
					action: 'Get cart summary',
				},
				{
					name: 'Get Checkout',
					value: 'getCheckout',
					action: 'Get checkout information',
				},
				{
					name: 'List Cart Items',
					value: 'listCartItems',
					action: 'List all items in a cart',
				},
				{
					name: 'List Carts',
					value: 'listCarts',
					action: 'List all order carts',
				},
				{
					name: 'List Coupons',
					value: 'listCoupons',
					action: 'List cart coupons',
				},
				{
					name: 'Update Cart',
					value: 'updateCart',
					action: 'Update a cart',
				},
				{
					name: 'Update Cart Item',
					value: 'updateCartItem',
					action: 'Update a cart item',
				},
				{
					name: 'Validate Cart',
					value: 'validateCart',
					action: 'Validate cart and create order',
				},
			],
			default: 'listCarts',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionListCarts({
			...displayOptions,
			show: { ...displayOptions?.show, orderOperation: ['listCarts'] },
		}),
		...descriptionCreateCart({
			...displayOptions,
			show: { ...displayOptions?.show, orderOperation: ['createCart'] },
		}),
		...descriptionGetCart({
			...displayOptions,
			show: { ...displayOptions?.show, orderOperation: ['getCart'] },
		}),
		...descriptionUpdateCart({
			...displayOptions,
			show: { ...displayOptions?.show, orderOperation: ['updateCart'] },
		}),
		...descriptionDeleteCart({
			...displayOptions,
			show: { ...displayOptions?.show, orderOperation: ['deleteCart'] },
		}),
		...descriptionListCartItems({
			...displayOptions,
			show: { ...displayOptions?.show, orderOperation: ['listCartItems'] },
		}),
		...descriptionGetCartItem({
			...displayOptions,
			show: { ...displayOptions?.show, orderOperation: ['getCartItem'] },
		}),
		...descriptionUpdateCartItem({
			...displayOptions,
			show: { ...displayOptions?.show, orderOperation: ['updateCartItem'] },
		}),
		...descriptionDeleteCartItem({
			...displayOptions,
			show: { ...displayOptions?.show, orderOperation: ['deleteCartItem'] },
		}),
		...descriptionGetCheckout({
			...displayOptions,
			show: { ...displayOptions?.show, orderOperation: ['getCheckout'] },
		}),
		...descriptionValidateCart({
			...displayOptions,
			show: { ...displayOptions?.show, orderOperation: ['validateCart'] },
		}),
		...descriptionAssignCart({
			...displayOptions,
			show: { ...displayOptions?.show, orderOperation: ['assignCart'] },
		}),
		...descriptionListCoupons({
			...displayOptions,
			show: { ...displayOptions?.show, orderOperation: ['listCoupons'] },
		}),
		...descriptionAddCoupon({
			...displayOptions,
			show: { ...displayOptions?.show, orderOperation: ['addCoupon'] },
		}),
		...descriptionDeleteCoupon({
			...displayOptions,
			show: { ...displayOptions?.show, orderOperation: ['deleteCoupon'] },
		}),
		...descriptionGetCartSummary({
			...displayOptions,
			show: { ...displayOptions?.show, orderOperation: ['getCartSummary'] },
		}),
	];
}

/**
 * Executes the selected Order operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('orderOperation', 0, { extractValue: true });

	switch (operation) {
		case 'listCarts':
			return await executeListCarts.call(this);
		case 'createCart':
			return await executeCreateCart.call(this);
		case 'getCart':
			return await executeGetCart.call(this);
		case 'updateCart':
			return await executeUpdateCart.call(this);
		case 'deleteCart':
			return await executeDeleteCart.call(this);
		case 'listCartItems':
			return await executeListCartItems.call(this);
		case 'getCartItem':
			return await executeGetCartItem.call(this);
		case 'updateCartItem':
			return await executeUpdateCartItem.call(this);
		case 'deleteCartItem':
			return await executeDeleteCartItem.call(this);
		case 'getCheckout':
			return await executeGetCheckout.call(this);
		case 'validateCart':
			return await executeValidateCart.call(this);
		case 'assignCart':
			return await executeAssignCart.call(this);
		case 'listCoupons':
			return await executeListCoupons.call(this);
		case 'addCoupon':
			return await executeAddCoupon.call(this);
		case 'deleteCoupon':
			return await executeDeleteCoupon.call(this);
		case 'getCartSummary':
			return await executeGetCartSummary.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "order"`);
}
