// TODO De-namespacify these calls, using Visualforce.remoting.Manager
export function vfFetchOrder(id) {
	var promise = new Promise((resolve, reject) => {
		QOFController.ensureTicketOrder(
			(id) ? id.substring(0,15) : null,
			(result, event) => {
				if (event.status) {
					resolve(result);
				} else {
					reject(event.message);
				}
			},
			{escape: false}
		);
	});
	return promise;
}

export function vfFetchItems(orderId) {
	var promise = new Promise((resolve, reject) => {
		QOFController.fetchItems(
			orderId.substring(0,15),
			(result, event) => {
				if (event.status) {
					resolve(result);
				} else {
					reject(event.message);
				}
			},
			{escape: false}
		);
	});
	return promise;
}

