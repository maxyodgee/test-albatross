(function(){
window.gtm_tracking_calls = {};
window.gtm_tracking_calls.begin_checkout = function() {
dataLayer.push({
  "event": "begin_checkout",
  "ecommerce": {
    "items": [
      {
        "item_brand": "^[(a-zA-Z0-9-_, )+]*$",
        "value": "^[(a-zA-Z0-9-_, )+]*$",
        "checkout_step": "^[(0-9.)+]*$",
        "item_category": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category_2": "^[(a-zA-Z0-9-_, )+]*$",
        "item_id": "^[(a-zA-Z0-9-_, )+]*$",
        "checkout_option": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category_3": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category_4": "^[(a-zA-Z0-9-_, )+]*$",
        "item_price": "^[(0-9)+-.]*$",
        "item_name": "^[(a-zA-Z0-9-_, )+]*$"
      },
      {
        "{{variable_key}}": "{{variable_value}}"
      }
    ]
  }
});
//
}

window.gtm_tracking_calls.add_shipping_info = function(){
//
dataLayer.push({
  "event": "add_shipping_info",
  "item_index": "^[(a-zA-Z0-9-_, )+]*$",
  "coupon": "^[(a-zA-Z0-9-_, )+]*$",
  "item_id": "^[(a-zA-Z0-9-_, )+]*$",
  "shipping_tier": "^([A-Za-z]+)$",
  "item_quantity": "^([0-9]+)$",
  "value": "^[(a-zA-Z0-9-_, )+]*$",
  "item_category": "^[(a-zA-Z0-9-_, )+]*$",
  "currency": "^[(A-Z)+]*$",
  "item_price": "^[(0-9)+-.]*$",
  "item_variant": "^[(a-zA-Z0-9-_, )+]*$",
  "item_name": "^[(a-zA-Z0-9-_, )+]*$",
  "item_brand": "^[(a-zA-Z0-9-_, )+]*$"
});
//
}

window.gtm_tracking_calls.customize_product = function(){
//
dataLayer.push({
  "event": "customize_product"
});
//
}

window.gtm_tracking_calls.view_cart = function(){
//
dataLayer.push({
  "event": "view_cart",
  "ecommerce": {
    "items": [
      {
        "item_variant": "^[(a-zA-Z0-9-_, )+]*$",
        "item_brand": "^[(a-zA-Z0-9-_, )+]*$",
        "item_quantity": "^([0-9]+)$",
        "item_name": "^[(a-zA-Z0-9-_, )+]*$",
        "item_index": "^[(a-zA-Z0-9-_, )+]*$",
        "item_id": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category": "^[(a-zA-Z0-9-_, )+]*$",
        "item_price": "^[(0-9)+-.]*$",
        "item_currency": "^[A-Z]+$"
      },
      {
        "{{variable_key}}": "{{variable_value}}"
      }
    ]
  }
});
//
}

window.gtm_tracking_calls.partial_refund = function(){
//
dataLayer.push({
  "event": "partial_refund",
  "ecommerce": {
    "quantity": "^[(0-9.)+]*$",
    "transaction_id": "^[(a-zA-Z0-9-_, )+]*$",
    "index": "^[(0-9.)+]*$",
    "items": [
      {
        "item_category_4": "^[(a-zA-Z0-9-_, )+]*$",
        "item_list_id": "^[(a-zA-Z0-9-_, )+]*$",
        "item_id": "^[(a-zA-Z0-9-_, )+]*$",
        "item_price": "^[(0-9)+-.]*$",
        "item_name": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category_3": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category_2": "^[(a-zA-Z0-9-_, )+]*$",
        "item_list_name": "^[(a-zA-Z0-9-_, )+]*$",
        "item_variant": "^[(a-zA-Z0-9-_, )+]*$",
        "item_brand": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category": "^[(a-zA-Z0-9-_, )+]*$"
      },
      {
        "{{variable_key}}": "{{variable_value}}"
      }
    ]
  }
});
//
}

window.gtm_tracking_calls.view_item_list = function(){
//
dataLayer.push({
  "event": "view_item_list",
  "ecommerce": {
    "items": [
      {
        "item_id": "^[(a-zA-Z0-9-_, )+]*$",
        "item_quantity": "^([0-9]+)$",
        "item_currency": "^[A-Z]+$",
        "item_category_3": "^[(a-zA-Z0-9-_, )+]*$",
        "item_price": "^[(0-9)+-.]*$",
        "item_index": "^[(a-zA-Z0-9-_, )+]*$",
        "item_list_name": "^[(a-zA-Z0-9-_, )+]*$",
        "item_brand": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category_4": "^[(a-zA-Z0-9-_, )+]*$",
        "item_list_id": "^[(a-zA-Z0-9-_, )+]*$",
        "item_name": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category_2": "^[(a-zA-Z0-9-_, )+]*$",
        "item_variant": "^[(a-zA-Z0-9-_, )+]*$"
      },
      {
        "{{variable_key}}": "{{variable_value}}"
      }
    ]
  }
});
//
}

window.gtm_tracking_calls.view_promotion = function(){
//
dataLayer.push({
  "event": "view_promotion",
  "ecommerce": {
    "items": [
      {
        "item_id": "^[(a-zA-Z0-9-_, )+]*$",
        "quantity": "^[(0-9.)+]*$",
        "location_id": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category_4": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category_3": "^[(a-zA-Z0-9-_, )+]*$",
        "item_name": "^[(a-zA-Z0-9-_, )+]*$",
        "item_price": "^[(0-9)+-.]*$",
        "currency": "^[(A-Z)+]*$",
        "promotion_id": "^[(a-zA-Z0-9-_, )+]*$",
        "promotion_name": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category_2": "^[(a-zA-Z0-9-_, )+]*$",
        "index": "^[(0-9.)+]*$",
        "item_brand": "^[(a-zA-Z0-9-_, )+]*$",
        "item_variant": "^[(a-zA-Z0-9-_, )+]*$",
        "creative_slot": "^[(a-zA-Z0-9-_, )+]*$",
        "creative_name": "^[(a-zA-Z0-9-_, )+]*$"
      },
      {
        "{{variable_key}}": "{{variable_value}}"
      }
    ]
  }
});
//
}

window.gtm_tracking_calls.change_product_thumbnail = function(){
//
dataLayer.push({
  "event": "change_product_thumbnail"
});
//
}

window.gtm_tracking_calls.checkout_progress = function(){
//
dataLayer.push({
  "event": "checkout_progress",
  "ecommerce": {
    "checkout_option": "^[(a-zA-Z0-9-_, )+]*$",
    "checkout_step": "^[(0-9.)+]*$",
    "items": [
      {},
      {
        "{{variable_key}}": "{{variable_value}}"
      }
    ]
  }
});
//
}

window.gtm_tracking_calls.total_refund = function(){
//
dataLayer.push({
  "event": "total_refund",
  "ecommerce": {
    "transaction_id": "^[(a-zA-Z0-9-_, )+]*$",
    "items": [
      {},
      {
        "{{variable_key}}": "{{variable_value}}"
      }
    ]
  }
});
//
}

window.gtm_tracking_calls.remove_from_cart = function(){
//
dataLayer.push({
  "event": "remove_from_cart",
  "ecommerce": {
    "items": [
      {
        "item_brand": "^[(a-zA-Z0-9-_, )+]*$",
        "item_name": "^[(a-zA-Z0-9-_, )+]*$",
        "quantity": "^[(0-9.)+]*$",
        "item_category": "^[(a-zA-Z0-9-_, )+]*$",
        "item_list_id": "^[(a-zA-Z0-9-_, )+]*$",
        "index": "^[(0-9.)+]*$",
        "currency": "^[(A-Z)+]*$",
        "item_id": "^[(a-zA-Z0-9-_, )+]*$",
        "value": "^[(a-zA-Z0-9-_, )+]*$",
        "item_price": "^[(0-9)+-.]*$",
        "item_variant": "^[(a-zA-Z0-9-_, )+]*$",
        "item_list_name": "^[(a-zA-Z0-9-_, )+]*$"
      },
      {
        "{{variable_key}}": "{{variable_value}}"
      }
    ]
  }
});
//
}

window.gtm_tracking_calls.use_invalid_coupon = function(){
//
dataLayer.push({
  "event": "use_invalid_coupon"
});
//
}

window.gtm_tracking_calls.add_payment_info = function(){
//
dataLayer.push({
  "event": "add_payment_info",
  "currency": "^[(A-Z)+]*$",
  "item_id": "^[(a-zA-Z0-9-_, )+]*$",
  "item_category": "^[(a-zA-Z0-9-_, )+]*$",
  "item_name": "^[(a-zA-Z0-9-_, )+]*$",
  "item_quantity": "^([0-9]+)$",
  "item_variant": "^[(a-zA-Z0-9-_, )+]*$",
  "coupon": "^[(a-zA-Z0-9-_, )+]*$",
  "item_index": "^[(a-zA-Z0-9-_, )+]*$",
  "item_price": "^[(0-9)+-.]*$",
  "item_brand": "^[(a-zA-Z0-9-_, )+]*$",
  "value": "^[(a-zA-Z0-9-_, )+]*$",
  "payment_type": "^[(A-Z )+]*$"
});
//
}

window.gtm_tracking_calls.start_trial = function(){
//
dataLayer.push({
  "event": "start_trial"
});
//
}

window.gtm_tracking_calls.select_item = function(){
//
dataLayer.push({
  "event": "select_item",
  "ecommerce": {
    "items": [
      {
        "item_index": "^[(a-zA-Z0-9-_, )+]*$",
        "item_brand": "^[(a-zA-Z0-9-_, )+]*$",
        "item_name": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category_2": "^[(a-zA-Z0-9-_, )+]*$",
        "item_list_name": "^[(a-zA-Z0-9-_, )+]*$",
        "item_quantity": "^([0-9]+)$",
        "item_variant": "^[(a-zA-Z0-9-_, )+]*$",
        "item_list_id": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category": "^[(a-zA-Z0-9-_, )+]*$",
        "item_price": "^[(0-9)+-.]*$",
        "item_category_3": "^[(a-zA-Z0-9-_, )+]*$",
        "item_id": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category_4": "^[(a-zA-Z0-9-_, )+]*$",
        "item_currency": "^[A-Z]+$"
      },
      {
        "{{variable_key}}": "{{variable_value}}"
      }
    ]
  }
});
//
}

window.gtm_tracking_calls.add_to_wishlist = function(){
//
dataLayer.push({
  "event": "add_to_wishlist",
  "ecommerce": {
    "items": [
      {
        "item_index": "^[(a-zA-Z0-9-_, )+]*$",
        "currency": "^[(A-Z)+]*$",
        "item_price": "^[(0-9)+-.]*$",
        "item_id": "^[(a-zA-Z0-9-_, )+]*$",
        "item_brand": "^[(a-zA-Z0-9-_, )+]*$",
        "value": "^[(a-zA-Z0-9-_, )+]*$",
        "item_variant": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category": "^[(a-zA-Z0-9-_, )+]*$",
        "item_name": "^[(a-zA-Z0-9-_, )+]*$",
        "item_quantity": "^([0-9]+)$"
      },
      {
        "{{variable_key}}": "{{variable_value}}"
      }
    ]
  }
});
//
}

window.gtm_tracking_calls.view_item = function(){
//
dataLayer.push({
  "event": "view_item",
  "ecommerce": {
    "items": [
      {
        "item_quantity": "^([0-9]+)$",
        "item_currency": "^[A-Z]+$",
        "item_variant": "^[(a-zA-Z0-9-_, )+]*$",
        "stock": "^[(0-9)+]*$",
        "item_category": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category_2": "^[(a-zA-Z0-9-_, )+]*$",
        "item_list_name": "^[(a-zA-Z0-9-_, )+]*$",
        "item_id": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category_3": "^[(a-zA-Z0-9-_, )+]*$",
        "item_price": "^[(0-9)+-.]*$",
        "item_index": "^[(a-zA-Z0-9-_, )+]*$",
        "item_brand": "^[(a-zA-Z0-9-_, )+]*$",
        "item_list_id": "^[(a-zA-Z0-9-_, )+]*$"
      },
      {
        "{{variable_key}}": "{{variable_value}}"
      }
    ]
  }
});
//
}

window.gtm_tracking_calls.add_to_cart = function(){
//
dataLayer.push({
  "event": "add_to_cart",
  "ecommerce": {
    "items": [
      {
        "item_list_name": "^[(a-zA-Z0-9-_, )+]*$",
        "item_list_id": "^[(a-zA-Z0-9-_, )+]*$",
        "item_variant": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category_2": "^[(a-zA-Z0-9-_, )+]*$",
        "item_id": "^[(a-zA-Z0-9-_, )+]*$",
        "item_price": "^[(0-9)+-.]*$",
        "index": "^[(0-9.)+]*$",
        "item_brand": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category_3": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category_4": "^[(a-zA-Z0-9-_, )+]*$",
        "item_name": "^[(a-zA-Z0-9-_, )+]*$",
        "item_currency": "^[A-Z]+$",
        "quantity": "^[(0-9.)+]*$"
      },
      {
        "{{variable_key}}": "{{variable_value}}"
      }
    ]
  }
});
//
}

window.gtm_tracking_calls.purchase = function(){
//
dataLayer.push({
  "event": "purchase",
  "ecommerce": {
    "coupon": "^[(a-zA-Z0-9-_, )+]*$",
    "transaction_id": "^[(a-zA-Z0-9-_, )+]*$",
    "index": "^[(0-9.)+]*$",
    "affiliation": "^[(a-zA-Z0-9-_, )+]*$",
    "transaction_tax": "^[(a-zA-Z0-9-_, )+]*$",
    "quantity": "^[(0-9.)+]*$",
    "shipping": "^[(a-zA-Z0-9-_, )+]*$",
    "item_currency": "^[A-Z]+$",
    "revenue": "^[(a-zA-Z0-9-_, )+]*$",
    "items": [
      {
        "item_list_name": "^[(a-zA-Z0-9-_, )+]*$",
        "item_list_id": "^[(a-zA-Z0-9-_, )+]*$",
        "item_price": "^[(0-9)+-.]*$",
        "item_variant": "^[(a-zA-Z0-9-_, )+]*$",
        "item_id": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category": "^[(a-zA-Z0-9-_, )+]*$",
        "item_name": "^[(a-zA-Z0-9-_, )+]*$",
        "item_brand": "^[(a-zA-Z0-9-_, )+]*$"
      },
      {
        "{{variable_key}}": "{{variable_value}}"
      }
    ]
  }
});
//
}

window.gtm_tracking_calls.find_location = function(){
//
dataLayer.push({
  "event": "find_location"
});
//
}

window.gtm_tracking_calls.select_promotion = function(){
//
dataLayer.push({
  "event": "select_promotion",
  "ecommerce": {
    "items": [
      {
        "item_category_3": "^[(a-zA-Z0-9-_, )+]*$",
        "location_id": "^[(a-zA-Z0-9-_, )+]*$",
        "creative_slot": "^[(a-zA-Z0-9-_, )+]*$",
        "creative_name": "^[(a-zA-Z0-9-_, )+]*$",
        "quantity": "^[(0-9.)+]*$",
        "item_variant": "^[(a-zA-Z0-9-_, )+]*$",
        "item_name": "^[(a-zA-Z0-9-_, )+]*$",
        "item_category_2": "^[(a-zA-Z0-9-_, )+]*$",
        "item_id": "^[(a-zA-Z0-9-_, )+]*$",
        "index": "^[(0-9.)+]*$",
        "item_category_4": "^[(a-zA-Z0-9-_, )+]*$",
        "currency": "^[(A-Z)+]*$",
        "value": "^[(a-zA-Z0-9-_, )+]*$",
        "item_price": "^[(0-9)+-.]*$",
        "item_category": "^[(a-zA-Z0-9-_, )+]*$",
        "promotion_name": "^[(a-zA-Z0-9-_, )+]*$",
        "promotion_id": "^[(a-zA-Z0-9-_, )+]*$",
        "item_brand": "^[(a-zA-Z0-9-_, )+]*$"
      },
      {
        "{{variable_key}}": "{{variable_value}}"
      }
    ]
  }
});
//
}

window.gtm_tracking_calls.campaign_details = function(){
//
dataLayer.push({
  "event": "campaign_details"
});
//
}

window.gtm_tracking_calls.request_replenishment = function(){
//
dataLayer.push({
  "event": "request_replenishment",
  "item_id": "^[(a-zA-Z0-9-_, )+]*$"
});
//
}

window.gtm_tracking_calls.stop_form = function(){
//
dataLayer.push({
'event': 'stop_form',
'form_id': '^[(a-zA-Z0-9-_, )+]*$',
'form_name': '^[(a-zA-Z0-9-_, )+]*$'
});
//
}

window.gtm_tracking_calls.enter_field = function(){
//
dataLayer.push({
  "event": "enter_field",
  "field_id": "^[(a-zA-Z0-9-_, )+]*$"
});
//
}

window.gtm_tracking_calls.error_field = function(){
//
dataLayer.push({
  "event": "error_field",
  "field_id": "^[(a-zA-Z0-9-_, )+]*$"
});
//
}

window.gtm_tracking_calls.start_form = function(){
//
dataLayer.push({
  "event": "start_form",
  "form_id": "^[(a-zA-Z0-9-_, )+]*$",
  "form_name": "^[(a-zA-Z0-9-_, )+]*$"
});
//
}

window.gtm_tracking_calls.generate_lead = function(){
//
dataLayer.push({
  "event": "generate_lead",
  "lead_id": "^[(a-zA-Z0-9-_)+]*$",
  "lead_subject": "^[(a-zA-Z0-9-_)+]*$",
  "lead_value": "^([0-9.]+)$",
  "lead_currency": "^[(A-Z)+]*$"
});
//
}

window.gtm_tracking_calls.contact = function(){
//
dataLayer.push({
  "event": "contact",
  "contact_subject": "^[(a-zA-Z0-9-_)+]*$",
  "contact_method": "^[(a-zA-Z0-9-_)+]*$"
});
//
}

window.gtm_tracking_calls.submit_form = function(){
//
dataLayer.push({
  "event": "submit_form",
  "form_id": "^[(a-zA-Z0-9-_, )+]*$",
  "form_name": "^[(a-zA-Z0-9-_, )+]*$"
});
//
}

window.gtm_tracking_calls.popup_view = function(){
//
dataLayer.push({
  "event": "popup_view",
  "popup_name": "^[(a-zA-Z0-9-_)+]*$",
  "popup_id": "^[(a-zA-Z0-9-_)+]*$"
});
//
}

window.gtm_tracking_calls.widget_information = function(){
//
dataLayer.push({
  "event": "widget_information",
  "widget_name": "^[(a-zA-Z0-9-_, )+]*$"
});
//
}

window.gtm_tracking_calls.click = function(){
//
dataLayer.push({
  "event": "click",
  "link_id": "^[(a-zA-Z0-9-_, )+]*$",
  "link_classes": "^[(a-zA-Z0-9-_, )+]*$",
  "outbound": "TRUE",
  "link_domain": "^[(a-zA-Z0-9-_, )+]*$",
  "link_url": "^[(a-zA-Z0-9-_, )+]*$"
});
//
}

window.gtm_tracking_calls.start_flow = function(){
//
dataLayer.push({
  "event": "start_flow"
});
//
}

window.gtm_tracking_calls.share = function(){
//
dataLayer.push({
  "event": "share",
  "method": "^([A-Za-z]+)$",
  "content_type": "^[(a-zA-ZÃ€-Ã¿0-9-_, )+]*$",
  "item_id": "^[(a-zA-Z0-9-_, )+]*$"
});
//
}

window.gtm_tracking_calls.select_content = function(){
//
dataLayer.push({
  "event": "select_content",
  "content_type": "^[(a-zA-ZÃ€-Ã¿0-9-_, )+]*$",
  "item_id": "^[(a-zA-Z0-9-_, )+]*$"
});
//
}

window.gtm_tracking_calls.start_chatbot = function(){
//
dataLayer.push({
  "event": "start_chatbot"
});
//
}

window.gtm_tracking_calls.click_side_nav = function(){
//
dataLayer.push({
  "event": "click_side_nav",
  "element_text": "^[(a-zA-Z0-9-_)+]*$",
  "element_id": "^[(a-zA-Z0-9-_)+]*$"
});
//
}

window.gtm_tracking_calls.click_menu_nav = function(){
//
dataLayer.push({
  "event": "click_menu_nav",
  "element_text": "^[(a-zA-Z0-9-_)+]*$",
  "element_id": "^[(a-zA-Z0-9-_)+]*$"
});
//
}

window.gtm_tracking_calls.close_chatbot = function(){
//
dataLayer.push({
  "event": "close_chatbot"
});
//
}

window.gtm_tracking_calls.dwell_on_content = function(){
//
dataLayer.push({
  "event": "dwell_on_content",
  "attention_time": "^([0-9]+)$",
  "dwell_time_content": "^([0-9])+"
});
//
}

window.gtm_tracking_calls.click_header_nav = function(){
//
dataLayer.push({
  "event": "click_header_nav",
  "element_text": "^[(a-zA-Z0-9-_)+]*$"
});
//
}

window.gtm_tracking_calls.click_footer_nav = function(){
//
dataLayer.push({
  "event": "click_footer_nav",
  "element_text": "^[(a-zA-Z0-9-_)+]*$",
  "element_id": "^[(a-zA-Z0-9-_)+]*$"
});
//
}

window.gtm_tracking_calls.click_phone = function(){
//
dataLayer.push({
  "event": "click_phone",
  "phone_number": "^+[(0-9)+]*$"
});
//
}

window.gtm_tracking_calls.click_widget = function(){
//
dataLayer.push({
  "event": "click_widget",
  "widget_name": "^[(a-zA-Z0-9-_, )+]*$"
});
//
}

window.gtm_tracking_calls.reading_style = function(){
//
dataLayer.push({
  "event": "reading_style",
  "reader_type": "reading_style-group"
});
//
}

window.gtm_tracking_calls.view_virtual_content = function(){
//
dataLayer.push({
  "event": "view_virtual_content",
  "content_location": "view_virtual_content-group"
});
//
}

window.gtm_tracking_calls.view_content = function(){
//
dataLayer.push({
  "event": "view_content",
  "content_type": "^[(a-zA-ZÃ€-Ã¿0-9-_, )+]*$",
  "content_id": "^[(a-zA-Z0-9-_)+]*$",
  "thumbnail": "^((https://|http://)[a-zA-Z1-9 -_.]+)$"
});
//
}

window.gtm_tracking_calls.scroll_content = function(){
//
dataLayer.push({
  "event": "scroll_content",
  "scroll_depth_threshold": "^([0-9]+)$"
});
//
}

window.gtm_tracking_calls.click_email = function(){
//
dataLayer.push({
  "event": "click_email"
});
//
}

window.gtm_tracking_calls.consume_content = function(){
//
dataLayer.push({
  "event": "consume_content",
  "consumption_content": "^([0-9])+"
});
//
}

window.gtm_tracking_calls.click_tab = function(){
//
dataLayer.push({
  "event": "click_tab"
});
//
}

window.gtm_tracking_calls.zoom_image = function(){
//
dataLayer.push({
  "event": "zoom_image"
});
//
}

window.gtm_tracking_calls.click_filter = function(){
//
dataLayer.push({
  "event": "click_filter",
  "filter_name": "^[(a-zA-Z0-9-_, )+]*$"
});
//
}

window.gtm_tracking_calls.click_cta = function(){
//
dataLayer.push({
  "event": "click_cta",
  "cta_category": "^[(a-zA-Z0-9-_)+]*$",
  "cta_name": "^[(a-zA-Z0-9-_)+]*$"
});
//
}

window.gtm_tracking_calls.progress_in_flow = function(){
//
dataLayer.push({
  "event": "progress_in_flow"
});
//
}

window.gtm_tracking_calls.complete_flow = function(){
//
dataLayer.push({
  "event": "complete_flow"
});
//
}

window.gtm_tracking_calls.file_download = function(){
//
dataLayer.push({
  "event": "file_download",
  "link_id": "^[(a-zA-Z0-9-_, )+]*$",
  "file_name": "^([a-zA-Z0-9]+)$",
  "link_url": "^[(a-zA-Z0-9-_, )+]*$",
  "link_text": "^([a-zA-Z0-9]+)$"
});
//
}

window.gtm_tracking_calls.view_experiment = function(){
//
dataLayer.push({
  "event": "view_experiment",
  "experiment_name": "^[(a-zA-Z0-9-_, )+]*$",
  "experiment_id": "^([0-9]+)$",
  "variation_id": "^([0-9]+)$",
  "variation_name": "^[(a-zA-Z0-9-_, )+]*$"
});
//
}

window.gtm_tracking_calls.accept_cookieLab = function(){
//
dataLayer.push({
  "event": "accept_cookieLab"
});
//
}

window.gtm_tracking_calls.accept_consentlab = function(){
//
dataLayer.push({
  "event": "accept_consentlab"
});
//
}

window.gtm_tracking_calls.view_search_result = function(){
//
dataLayer.push({
  "event": "view_search_result",
  "search_term": "^[(a-zA-ZÃ€-Ã¿0-9-_, )+]*$"
});
//
}

window.gtm_tracking_calls.refuse_cookieLab = function(){
//
dataLayer.push({
  "event": "refuse_cookieLab"
});
//
}

window.gtm_tracking_calls.session_information = function(){
//
dataLayer.push({
  "event": "session_information",
  "session_id": "^[(a-zA-Z0-9-_, )+]*$"
});
//
}

window.gtm_tracking_calls.detect_adblock = function(){
//
dataLayer.push({
  "event": "detect_adblock"
});
//
}

window.gtm_tracking_calls.search = function(){
//
dataLayer.push({
  "event": "search",
  "search_term": "^[(a-zA-ZÃ€-Ã¿0-9-_, )+]*$"
});
//
}

window.gtm_tracking_calls.view_consentlab = function(){
//
dataLayer.push({
  "event": "view_consentlab"
});
//
}

window.gtm_tracking_calls.javascript_errors = function(){
//
dataLayer.push({
  "event": "javascript_errors"
});
//
}

window.gtm_tracking_calls.alert_payload_size = function(){
//
dataLayer.push({
  "event": "alert_payload_size",
  "event_name": "^[(a-zA-Z0-9-_, )+]*$"
});
//
}

window.gtm_tracking_calls.restart_session = function(){
//
dataLayer.push({
  "event": "restart_session"
});
//
}

window.gtm_tracking_calls.user_information = function(){
//
dataLayer.push({
  "event": "user_information",
  "client_id": "^([0-9]+)$",
  "user_id": "^[(a-zA-Z0-9-_, )+]*$"
});
//
}

window.gtm_tracking_calls.sign_up = function(){
//
dataLayer.push({
  "event": "sign_up",
  "login_status": "true, false"
});
//
}

window.gtm_tracking_calls.login = function(){
//
dataLayer.push({
  "event": "login"
});
//
}

window.gtm_tracking_calls.subscribe = function(){
//
dataLayer.push({
  "event": "subscribe"
});
//
}

window.gtm_tracking_calls.forgot_password = function(){
//
dataLayer.push({
  "event": "forgot_password"
});
//
}

window.gtm_tracking_calls.logout = function(){
//
dataLayer.push({
  "event": "logout"
});
//
}
})();
