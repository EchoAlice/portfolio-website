from base64 import encode
import hashlib

if __name__ == "__main__":
    values = []
    new_hash = []

    with open("input_test.txt", "r", encoding="utf-8") as binary_input:
      values = list(map(int, binary_input.readlines()))

    def leaf_hash():
        for i in range(len(values)):
            
            byte_value = values[i].to_bytes(2, 'big')
            hashed_node = hashlib.sha256(byte_value).hexdigest()
            values[i] = hashed_node
            print(values[i])
            #print('values[',i,']: ', values[i])
        
    def merkle(values):
        if len(values) == 1:                                    #if parent == null:
            # return
            print("Root Node: ", values[0])
        
        # iterates on increments of 2.  
        for i in range(0, len(values)-1, 2):
            left = values[i]
            right = values[i+1]

            concatenate = left + right 
            concatenate = int(left,16) + int(right, 16)
            print("Concat type: ", type(concatenate))
            
            byte_value = concatenate.to_bytes(2, 'big')
            hashed_node = hashlib.sha256(byte_value).hexdigest()
        
            new_hash[i] = hashed_node
            print(i)

    def combine(l,r):
        left = l.decode('hex')[::-1]
        right = r.decode('hex')[::-1]

    leaf_hash()    
    combine()