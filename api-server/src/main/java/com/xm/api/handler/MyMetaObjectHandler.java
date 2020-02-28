package com.xm.api.handler;

import com.baomidou.mybatisplus.core.handlers.MetaObjectHandler;
import org.apache.ibatis.reflection.MetaObject;
import org.springframework.stereotype.Component;

/**
 * 填充器, 新增和修改时自动填充时间
 * 配合实体中的 @TableField(fill= FieldFill.INSERT) 和 @TableField(fill= FieldFill.INSERT_UPDATE) 使用
 *
 * @author xiaomalover <xiaomalover@gmail.com>
 */
@Component
public class MyMetaObjectHandler implements MetaObjectHandler {

    @Override
    public void insertFill(MetaObject metaObject) {
        Long now = getSqlDate();
        String nowString = now.toString();
        setFieldValByName("createdAt", nowString, metaObject);
        setFieldValByName("updatedAt", nowString, metaObject);
    }

    @Override
    public void updateFill(MetaObject metaObject) {
        setFieldValByName("updatedAt", getSqlDate().toString(), metaObject);
    }

    private Long getSqlDate() {
        return System.currentTimeMillis() / 1000;
    }
}
