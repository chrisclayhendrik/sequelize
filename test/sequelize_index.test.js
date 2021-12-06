const {sequelize} = require('../src/sequelize_index');
const {Restaurant} = require('../src/restaurant');
const { Menu } = require('../src/menu');
const { Item } = require('../src/item');

describe('Restaurant', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a restaurant', async () => {
        const restaurant = await Restaurant.create({ name: 'Ronalds', image: 'http://some.image.url' })
        expect(restaurant.id).toBe(1)
    })

    test('can create a menu', async () => {
        const restaurant = await Restaurant.create({ name: 'Ronalds', image: 'http://some.image.url' })
        const menu = await Menu.create({ name: 'Breakfast', restaurantId: restaurant.id })
        expect(menu.id).toBe(1)
    })

    test('can create an item', async () => {
        const restaurant = await Restaurant.create({ name: 'Ronalds', image: 'http://some.image.url' })
        const menu = await Menu.create({ name: 'Breakfast', restaurantId: restaurant.id })
        const item = await Item.create({ name: 'Eggs', price: '$2.00', menuId: menu.id })
        expect(item.id).toBe(1)
    })

    test('restaurants have menus', async () => {
        const restaurant = await Restaurant.create({name: 'Ronalds', image: 'http://some.image.url'})
        const menu = await Menu.create({name: 'set 1'});
        await restaurant.addMenu(menu);
        const menus = await restaurant.getMenus();
        expect(menus[0].name).toBe('set 1');
    })

    test('menus have items', async () => {
        const restaurant = await Restaurant.create({name: 'Ronalds', image: 'http://some.image.url'})
        const menu = await Menu.create({name: 'set 1'});
        await restaurant.addMenu(menu);
        const item = await Item.create({name: 'Eggs', price: '$2.00'});
        await menu.addItem(item);
        const items = await menu.getItems();
        expect(items[0].name).toBe('Eggs');
    })

})
    