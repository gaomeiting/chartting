import axios from "./http.js";
import Qs from 'qs';
export function getData(url, params, showLoading = true) {
	return axios.get(url, {
		params,
		showLoading
	}).then((res) => {
		return Promise.resolve(res.data)
	}).catch(err => {
		return Promise.reject(err)
	})
}

export function postData(url, params, config = {
	showLoading: true
}) {
	return axios.post(url, params, config).then(res => {
		return Promise.resolve(res.data)
	}).catch(err => {
		return Promise.reject(err)
	});
}
export function postDataQs(url, params, config = {
	showLoading: true
}) {
	return axios.post(url, Qs.stringify(params), {
		...config,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}).then(res => {
		return Promise.resolve(res.data)
	}).catch(err => {
		return Promise.reject(err)
	});
}

export function deleteData(url, params, showLoading = true) {
	return axios.delete(url, {
		params,
		showLoading
	}).then(res => {
		return Promise.resolve(res.data)
	}).catch(err => {
		return Promise.reject(err)
	});
}
export function putData(url, params, config = {
	showLoading: true
}) {
	return axios.put(url, params, config).then(res => {
		return Promise.resolve(res.data)
	}).catch(err => {
		return Promise.reject(err)
	});
}

export function patchData(url, params, config = {
	showLoading: true
}) {
	return axios.patch(url, params, config).then(res => {
		return Promise.resolve(res.data)
	}).catch(err => {
		return Promise.reject(err)
	});
}

export function getDataHide(url, params, showLoading = false) {
	return axios.get(url, {
		params,
		showLoading
	}).then((res) => {
		return Promise.resolve(res.data)
	}).catch(err => {
		return Promise.reject(err)
	})
}
export function postDataHide(url, params, config = {
	showLoading: false
}) {
	return axios.post(url, params, config).then(res => {
		return Promise.resolve(res.data)
	}).catch(err => {
		return Promise.reject(err)
	});
}
export function postDataQsHide(url, params, config = {
	showLoading: false
}) {
	return axios.post(url, Qs.stringify(params), {
		...config,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}).then(res => {
		return Promise.resolve(res.data)
	}).catch(err => {
		return Promise.reject(err)
	});
}

export function deleteDataHide(url, params, showLoading = false) {
	return axios.delete(url, {
		params,
		showLoading
	}).then(res => {
		return Promise.resolve(res.data)
	}).catch(err => {
		return Promise.reject(err)
	});
}
export function putDataHide(url, params, config = {
	showLoading: false
}) {
	return axios.put(url, params, config).then(res => {
		return Promise.resolve(res.data)
	}).catch(err => {
		return Promise.reject(err)
	});
}