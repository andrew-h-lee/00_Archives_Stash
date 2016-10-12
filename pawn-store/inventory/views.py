import datetime
from inventory.models import Item
from django.shortcuts import render_to_response, redirect
from django.template import RequestContext

def index(request):
	latest_item_list = Item.objects.all().order_by('-dateadded')[:5]
	return render_to_response('inventory/index.html',{'latest_item_list':latest_item_list})

def detail(request, item_id):
	item = Item.objects.get(pk=item_id)
	return render_to_response('inventory/detail.html',{'item':item})

def newitem(request):
	formdata = Item(dateadded = datetime.date.today().isoformat(), quantity = 1)
	form = NewItemForm(request.POST or None, instance = formdata)
	if form.is_valid():
		cmodel = form.save()
		cmodel.save()
		return redirect(index)
	return render_to_response('inventory/newitem.html',{'item_form':form}, context_instance=RequestContext(request))

