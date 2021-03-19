const baseUrl = "https://capi.ructrip.com"

export function myRequestGet(url, data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			method: "GET",
			data: data,
			success: function(res) {
				console.log('GET成功', res),
				resolve(res.data)
			},
			fail: function(err) {
				console.log('GET失败'),
				reject(err)
			}
		})
	})
}


export function myRequestPost(url, data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			header: {
				'Content-Type': 'application/json'
			},
			method: "POST",
			data: data,
			success: function(res) {
				console.log('POST成功', res),
					resolve(res.data)
			},
			fail: function(err) {
				console.log('POST失败'),
					reject(err)
			}
		})
	})
}
