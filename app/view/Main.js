Ext.define('DateApp.view.Main', {
    extend: 'Ext.form.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.form.FieldSet'
    ],
    config: {

        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Date Calculation'
            },
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'datepickerfield',
                        label: 'Date',
                        name: 'date',
                        value: new Date()
                    },
                    {
                        xtype: 'textfield',
                        name: 'days',
                        label: 'No. of Days',
                        type: 'integer',
                        value: 0
                    },
                    {
                        xtype: 'textfield',
                        name: 'month',
                        label: 'No. of Months',
                        type: 'integer',
                        value: 0
                    },
                    {
                        xtype: 'textfield',
                        name: 'year',
                        label: 'No. of Years',
                        type: 'integer',
                        value: 0
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        text: 'Info',
                        handler: function(){
                            Ext.Msg.alert(null, "Lets you add/subtract to a date.<br/>Just add (-) negative sign for subtraction.");
                        }
                    },{
                        xtype: 'spacer'
                    },{
                    text: 'getValue',
                    handler: function () {
                        var date = (Ext.ComponentQuery.query('datepickerfield')[0]).getValue();
                        var days = (Ext.ComponentQuery.query('textfield[name=days]')[0]).getValue();
                        var months = (Ext.ComponentQuery.query('textfield[name=month]')[0]).getValue();
                        var years = (Ext.ComponentQuery.query('textfield[name=year]')[0]).getValue();
                        //var errs = days.validate();
                        //Ext.Msg.alert(null, Ext.isNumeric(days));
                        if ((Ext.isNumeric(days))&&(Ext.isNumeric(months))&&(Ext.isNumeric(years))){                            
                            
                            if(((parseInt(days) >99999))||((parseInt(months) >99999))||((parseInt(years) >99999))){
                                Ext.Msg.alert(null,'Input must be less than 6 digits.');
                            }
                            else{
                                var dt = Ext.Date.add(new Date(date),Ext.Date.DAY, parseInt(days));
                                dt = Ext.Date.add(new Date(dt), Ext.Date.YEAR, parseInt(years));
                                dt = Ext.Date.add(new Date(dt), Ext.Date.MONTH,parseInt(months) );
                                Ext.Msg.alert(null, dt);
                            }
                        }
                        else
                            Ext.Msg.alert(null,'Please enter a numeric value.');
                    }
                }]
            }
        ]
    }
});//xt.ComponentQuery.query('textfield[name=firstName]');
