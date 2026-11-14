from rest_framework import serializers

class StockpredictionSerializer(serializers.Serializer):
    ticker=serializers.CharField(max_length=20)
    