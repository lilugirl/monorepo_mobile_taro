import React from "react"
import Taro from '@tarojs/taro'
import { View } from "@tarojs/components"

export const Toast=()=>{
    Taro.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 1500
      })
    return <View>toast</View>
}