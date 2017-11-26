import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

export function createStore (spec) {
	const emitter = new EventEmitter();
	emitter.setMaxListeners(100);

	const store = Object.assign({
		emitChange (event, callback) {
			emitter.emit(event, callback);
		},

		addChangeListner (event, callback) {
			emitter.on(event, callback);
		},

		removeChangeListner (event, callback) {
			emitter.removeListener(event, callback);
		}
	}, spec);

	return store;
}